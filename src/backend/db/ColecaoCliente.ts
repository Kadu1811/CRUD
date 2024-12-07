import { collection, doc, getDocs, setDoc, addDoc, deleteDoc, getDoc, Firestore, DocumentData, QueryDocumentSnapshot, SnapshotOptions } from 'firebase/firestore';
import { dataBase } from '../config';
import Client from "@/core/Client";
import { ClienteRepositorio } from "@/core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {

    #conversor = {
        toFirestore(cliente: Client): DocumentData {
            return {
                nome: cliente.nome,
                idade: cliente.idade,
            };
        },
        fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): Client {
            const dados = snapshot.data(options);
            return new Client(dados.nome, dados.idade, snapshot.id);
        },
    };

    #colecaoRef = collection(dataBase, 'clientes').withConverter(this.#conversor);

    async salvar(cliente: Client): Promise<Client> {
        if (cliente?.id) {
            const docRef = doc(this.#colecaoRef, cliente.id);
            await setDoc(docRef, cliente);
            return cliente;
        } else {
            const docRef = await addDoc(this.#colecaoRef, cliente);
            const docSnap = await getDoc(docRef);
            return docSnap.data()!;
        }
    }

    async excluir(cliente: Client): Promise<void> {
        if (cliente?.id) {
            const docRef = doc(this.#colecaoRef, cliente.id);
            await deleteDoc(docRef);
        }
    }

    async obterTodos(): Promise<Client[]> {
        const querySnapshot = await getDocs(this.#colecaoRef);
        return querySnapshot.docs.map(doc => doc.data() as Client) ?? [];
    }
}