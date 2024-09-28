import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import dotenv from "dotenv"
dotenv.config()

import {db} from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore"

const app = express()
const port = 8080;

app.use(express.json())
app.use(
	cors({
		origin: "http://localhost:3000"
	})
)
app.use(bodyParser.urlencoded({ extended: false }))

// Create a route at http://localhost:8080/testRoute. You can try it with your browser!
app.get("/", async (req, res) => {
	res.send("Hello World!");
});

// Get all watches
app.get("/watches", async (req, res) => {
	console.log("getting all watches")
	const collectionRef = collection(db, "Watches");
	const collectionSnap = await getDocs(collectionRef)
	const docs = []
	collectionSnap.forEach((doc) => {
		docs.push(doc.data())
	})
	res.send(docs)
})

// Add a new watch
app.post("/watches", async (req, res) => {
	const watchRef = collection(db, "Watches");
	const watchBody = req.body
	try {
		await addDoc(watchRef, watchBody)
	} catch (e) {
		console.error(e)
		res.status(500);
	}
	res.status(200).send("Succesfully Created Watch")
})

function start() {
	app.listen(port, () => {
		console.log(`Started listening on http://localhost:${port}`)
	})
}

start()
