import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  where,
  documentId,
  writeBatch,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2U4n4JjQt2aCdJ27WiONV9PxUQ54Jar0",
  authDomain: "williamknifemanreact.firebaseapp.com",
  projectId: "williamknifemanreact",
  storageBucket: "williamknifemanreact.appspot.com",
  messagingSenderId: "285939147378",
  appId: "1:285939147378:web:5341ff8fcf12206e3658eb",
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getItem(id) {
  const itemRef = doc(DB, "productos", id);

  const docSnap = await getDoc(itemRef);

  const item = docSnap.data();
  item.id = docSnap.id;

  return item;
}

export async function APICall() {
  const collectionRef = collection(DB, "productos");

  const docsSnap = await getDocs(collectionRef);

  const docsArray = docsSnap.docs;

  const docsData = docsArray.map((doc) => {
    let item = doc.data();
    item.id = doc.id;
    return item;
  });

  return docsData;
}

export async function getCategoria(categoriaID) {
  const q = query(
    collection(DB, "productos"),
    where("categoria", "==", categoriaID)
  );

  const docsSnap = await getDocs(q);

  const docsArray = docsSnap.docs;

  const docsData = docsArray.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return docsData;
}

// export async function createBuyOrder(order) {
//   const colectionRef = collection(DB, "orders");
//   let newOrder = await addDoc(colectionRef, order);
//   return newOrder.id;
// }

export async function createBuyOrderWithStock(order) {
  const collectionRef = collection(DB, "orders");
  const collectionProductsRef = collection(DB, "productos");

  let batch = writeBatch(DB);

  let arrayIds = order.items.map((itemInCart) => itemInCart.id);

  const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

  let snapshot = await getDocs(q);

  snapshot.docs.forEach((doc) => {
    let stockDisponible = doc.data().stock;
    let ItemInCart = order.items.find((item) => item.id === doc.id);
    let countItemInCart = ItemInCart.count;

    console.log(stockDisponible);
    console.log(countItemInCart);

    if (stockDisponible < countItemInCart) throw new Error("Stock agotado");
    else batch.update(doc.ref, { stock: stockDisponible - countItemInCart });
  });
  await batch.commit();

  let newOrder = await addDoc(collectionRef, order);

  return newOrder.id;
}
