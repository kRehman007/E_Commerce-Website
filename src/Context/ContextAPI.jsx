import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
  useSignOut,
} from "react-firebase-hooks/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  collection,
  addDoc,
} from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { Allimages } from "../ProductsImages/Allimages";

const firebaseConfig = {
  apiKey: "AIzaSyAk5BYrZPMcL4IEPO5iuVP5cUv6-WJ1PsA",
  authDomain: "ecommerce-22099.firebaseapp.com",
  projectId: "ecommerce-22099",
  storageBucket: "ecommerce-22099.appspot.com",
  messagingSenderId: "236377403780",
  appId: "1:236377403780:web:bad905f5fc1cffcfc9edd1",
  measurementId: "G-N4XX7YTSE6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const EcomContext = createContext(null);
export const useEcomContext = () => useContext(EcomContext);

export const ContextProvider = ({ children }) => {
  const [Products, setProducts] = useState([]);
  const [isSideBar, setIsSideBar] = useState(false);
  const [search, setSearch] = useState(false);
  const [isWish, setIsWish] = useState({});
  const [isScreen, setScreen] = useState(true);
  const [cartItem, setCartItem] = useState([]);
  const [WishItem, setWishItem] = useState([]);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [FirebaseData, setFirebaseData] = useState();
  const [BuyItem, setBuyItem] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("Ecomuser-info"))
  );
  const [first, setFirst] = useState(false);
  const [input, setInput] = useState();

  useEffect(() => {
    const storedwish = localStorage.getItem("Ecomwish_info");
    if (storedwish) {
      setWishItem(JSON.parse(storedwish));
    }
  }, []);

  useEffect(() => {
    if (WishItem.length != 0) {
      localStorage.setItem("Ecomwish_info", JSON.stringify(WishItem));
    }
  }, [WishItem]);

  const AddItemsToWish = (item) => {
    const res = cartItem.find((itemlist) => itemlist.id === item.id);
    console.log(res);
    if (res) {
      return;
    }
    setWishItem((prev) => [...prev, item]);
  };
  const RemoveItemsToWish = (item) => {
    setWishItem((prev) => prev.filter((itemlist) => itemlist.id !== item.id));
    if (WishItem.length == 1) {
      localStorage.removeItem("Ecomwish_info");
    }
  };
  const RemoveItemsToCart = (item) => {
    setCartItem((prev) => prev.filter((itemlist) => itemlist.id !== item.id));
    if (cartItem.length == 1) {
      localStorage.removeItem("Ecomcart_info");
    }
    calculateTotalPrice();
  };

  useEffect(() => {
    const stored = localStorage.getItem("Ecomcart_info");
    if (stored) {
      setCartItem(JSON.parse(stored));
    } else {
      console.log("No stored cart found.");
    }
  }, []);
  const AddItemsToCart = (id, title, qty = 1, img, price = 0) => {
    const res = cartItem.find((item) => item.id === id);
    console.log(res);
    if (res) {
      alert("Items has already Added to Cart");
    } else {
      setCartItem((prev) => [
        ...prev,
        { id: id, title: title, qty: qty, img: img, price: price },
      ]);
    }
  };

  const UpdatePlusToCart = (item) => {
    setCartItem((prev) =>
      prev.map((cartItems) =>
        cartItems.id === item.id
          ? { ...cartItems, qty: cartItems.qty + 1 }
          : cartItems
      )
    );
    calculateTotalPrice();
  };
  const UpdateMinusToCart = (item) => {
    if (item.qty > 1) {
      setCartItem((prev) =>
        prev.map((cartItems) =>
          cartItems.id === item.id
            ? { ...cartItems, qty: cartItems.qty - 1 }
            : cartItems
        )
      );
    } else {
      setCartItem((prev) => prev.filter((itemlist) => itemlist.id !== item.id));
    }
    if (cartItem.length === 1) {
      localStorage.removeItem("Ecomcart_info");
    }
    calculateTotalPrice();
  };
  useEffect(() => {
    if (cartItem.length != 0) {
      calculateTotalPrice();
      localStorage.setItem("Ecomcart_info", JSON.stringify(cartItem));
    }
  }, [cartItem]);

  const calculateTotalPrice = () => {
    setTotalPrice(
      cartItem?.reduce((total, item) => total + item.price * item.qty, 0)
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      const fetch = async () => {
        const res = await getDocument(user?.uid);
        console.log(res);
        setCurrentUser(res ? res : null);
      };
      fetch();
    });
  }, []);
  const getDocument = async (userID) => {
    try {
      const docRef = doc(firestore, "user", userID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log("Document Fetching Error", error);
    }
  };
  const isLoggedIn = currentUser ? true : false;

  //SignUp.......
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  // Login
  const [signInWithEmailAndPassword, Signinuser, Singinloading, Singerror] =
    useSignInWithEmailAndPassword(auth);
  //Signin with Goolge
  const [signInWithGoogle, Googleuser, Googleloading, Googleerror] =
    useSignInWithGoogle(auth);
  // LogOut....
  const [signOut, SignOutloading, SingOuterror] = useSignOut(auth);

  const AddDataInDB = async (collection, id, userData) => {
    const docRef = doc(firestore, collection, id);
    try {
      await setDoc(docRef, userData);
    } catch (error) {
      console.log("Error Found", error);
    }
  };
  const AddDataOrderInDB = async (collectionName, userData) => {
    try {
      const docRef = await addDoc(
        collection(firestore, collectionName),
        userData
      );
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log("Error Found", error);
    }
  };

  const StoreAllImages = async () => {
    const DocRef = doc(firestore, "Products", "Allimages");
    const snap = await getDoc(DocRef);
    if (snap.exists() && snap.data().images.length >= Allimages.length) {
      console.log("Data Exists Already");
    } else {
      const ArrayData = [];
      const uploadPromises = Allimages.map(async (item) => {
        const response = await fetch(item.img || item.src);
        const blob = await response.blob();
        const storageRef = ref(storage, `images/image${item.id}`);
        const snapShot = await uploadBytes(storageRef, blob);
        const URL = await getDownloadURL(snapShot.ref);
        ArrayData.push({ ...item, img: URL });
        setFirebaseData(ArrayData);
      });
      await Promise.all(uploadPromises);
      await setDoc(DocRef, { images: ArrayData });
    }
  };

  const GetDocumentData = async () => {
    try {
      const docRef = doc(firestore, "Products", "Allimages");
      const res = await getDoc(docRef);

      if (res.exists()) {
        return res.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };

  return (
    <EcomContext.Provider
      value={{
        isSideBar,
        setIsSideBar,
        search,
        setSearch,
        isScreen,
        setScreen,
        isLoggedIn,
        Products,
        setProducts,
        GetDocumentData,
        StoreAllImages,
        AddItemsToCart,
        UpdatePlusToCart,
        UpdateMinusToCart,
        cartItem,
        calculateTotalPrice,
        FirebaseData,
        setFirebaseData,
        AddItemsToWish,
        WishItem,
        RemoveItemsToWish,
        RemoveItemsToCart,
        setCartItem,
        isWish,
        setIsWish,
        TotalPrice,
        setTotalPrice,
        BuyItem,
        setBuyItem,
        setCurrentUser,
        currentUser,
        first,
        setFirst,
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
        AddDataInDB,
        signInWithGoogle,
        signInWithEmailAndPassword,
        Signinuser,
        Singinloading,
        Singerror,
        signOut,
        SignOutloading,
        SingOuterror,
        isLoggedIn,
        AddDataOrderInDB,
        input,
        setInput,
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};
