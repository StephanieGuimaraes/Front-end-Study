ReadME Typescript>

let user: {name: string, age: number} = { name: "Rodrigo", age: 30}

function signIn({ email, password }:{email: string, password: string}){
    
}


//---------------------------------------------------------
Interface--------------

interface Product {
    id: number,
    name: string
}

function newProduct(product: Product){
console.log("Prod: ", product)
}

newProduct({id: 1, name: "Jos"})

//----------------------------------------------------------
Interface extends---------------------

interface Person {
    id: number,
    name: string
}

interface Teacher extends Person {
    subjects: string[]
}

interface Student extends Person {
    age: number,
}

let teacher: Teacher = {id: 1, name: "Rodrigo", subjects:["JavaScript", "Typescript"]}

//------------------------------------------------------------
Type e intersecção de tipos-------------------

type Person = {
    id: number,
    name: string
}

type Teacher = Person & {
    subjects: string[]
}

type Student = Person & {
    age: number
}

let teacher: Teacher
let student: Student

//--------------------------------------------------------------
Asserção de tipos---------------

Nessa aula, veremos o conceito de type assertion no TypeScript, que permite definir a tipagem de um objeto quando o TypeScript não consegue inferir. 
Veremos um exemplo de uso de type assertion para consumir APIs e converter tipos de objetos.
Como se fosse uma conversão de um objeto que o typescript não tem como saber o valor, para tipos previamente definidos

type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;

//----------------------------------------------------------------
Restrigindo valores------------------------------

Nessa aula, aprenderemos a utilizar o type para restringir os valores disponíveis em uma variável. Ao definir os valores possíveis, como "small", "medium" e "large", podemos limitar as opções aceitáveis. Isso ajuda a evitar erros e garantir que apenas os valores desejados sejam utilizados. Ao utilizar essa estratégia, podemos restringir as opções disponíveis e garantir a consistência dos dados utilizados em nosso código.

type Size = "small" | "medium" | "large"

let size: Size

size = "small"

//-----------------------------------------------------------------
Enums-----------------------------------------

Nessa aula, aprenderemos a utilizar Enums no TypeScript para nomear constantes, melhorando a legibilidade do código. Vamos criar uma Enum chamada Profile, atribuindo valores como Admin (1), Cliente (2) e Vendedor (3). Ao utilizar Enum, podemos substituir números por constantes, facilitando a compreensão do código. Enum é útil para evitar "números mágicos" e tornar o código mais legível, especialmente para novos membros da equipe.

enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3
}

let profile: number = Profile.Admin
console.log(Profile.Seller)

//---------------------------------------------------------------------
Generic---------------------------------------

 /**
 * S => State
 * T => Type
 * K => Key
 * V => Value
 * E => Element
 */


function useState<T>(){
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }
    
    return {get, set};
}

let newState = useState();
useState.get();
newState.set('Steph');
console.log("teste: ", newState.get())



/* ===========================================
   📌 TIPOS PRIMITIVOS NO TYPESCRIPT
   =========================================== */

/* ---------- STRING ---------- */
let name: string = "Steph"       // Texto
// name = 123  // ❌ Erro: número não é string

/* ---------- NUMBER ---------- */
let age: number = 29             // Inteiro
let price: number = 7.5          // Decimal
// age = "texto" // ❌ Erro: string não é number

/* ---------- BOOLEAN ---------- */
let isActive: boolean = true     // true ou false
// isActive = "yes" // ❌ Erro

/* ---------- ANY (⚠️ usar com cuidado) ---------- */
let data: any = "texto"
data = 10
data = false
// Aceita qualquer valor, mas perde segurança

/* ---------- UNDEFINED ---------- */
let user: undefined = undefined  // Variável sem valor

/* ---------- NULL ---------- */
let result: null = null          // Ausência proposital de valor

/* ---------- UNKNOWN ---------- */
let value: unknown = 10
// Precisa checar o tipo antes de usar:
if (typeof value === "number") {
  console.log(value.toFixed(2))
}

/* ---------- VOID ---------- */
function logMessage(): void {
  console.log("Não retorna nada")
}

/* ---------- NEVER ---------- */
function error(): never {
  throw new Error("Falhou!")
}

/* ===========================================
   💡 DICAS RÁPIDAS
   1. Prefira tipagem explícita quando o tipo não for óbvio
   2. Use inferência quando o valor inicial já deixa claro o tipo
   3. Evite 'any' sempre que possível
   4. Variável sem tipo e sem valor => tipo 'any'
   =========================================== */