# Cardápio Online - Ótimas escolhas para matar a fome 😋😋

Um cardápio online com escolhas variadas, tendo um filtro próprio para facilitar a escolha.

## Tabela de conteúdos

- [Visão Geral](#visao-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias](#tecnologias)
  - [Oque eu aprendi](#oque-eu-aprendi)
  - [Desenvolvimento Continuo](#development-continuo)
  - [Recursos Úteis](#recursos-uteis)
- [Autor](#autor)
- [Reconhecimentos](#reconhecimentos)


## Visão Geral

### O desafio

O usuário que acessa o cardápio deve ser capaz de:
- Filtrar os itens de acordo com as categorias
- Ver as esolhas de lanches/bebidas
- Ver o preço
- Ver a descrição e o preço
- Ver a foto do lanche/bebida
- Voltar para todas as categorias caso queira.

### Screenshot

![Tela de Login](./public/images/menu.png)

### Links

- Live Site URL: [Comente Agora Web](https://julio-henrique-cardapio-online.netlify.app/)


## Meu processo

### Tecnologias

- [React](https://reactjs.org/) - JS lib

Não vou negar que esse processo parecia MUITO MAIS DIFICIL quando eu peguei para fazer ele, realmente pensava que seria um grande desafio.
### Oque eu aprendi

Esse projeto foi muito bom para solidificar os meus conhecimentos e para trazer à luz algumas dificuldades que eu tinha.

A começar pela listagem de itens, foi bem fácil e consegui fazer com muita tranquilidade. 
Uma coisa que eu gosto de fazer quando vou fazer a listagem dos itens do array é fazer a desustruturação de forma direta, porque assim evita de ficar com o cansativo `item.algumValor`
Ex:
```jsx
    const showCategories = categories.map((item, index) => {})
```

E aprendi que fica bem melhor deixar toda a parte de funcionalidade fora da renderização, fica bem melhor de ler
ex:
```jsx
export const Categories = ({ categories, filterItems }) => {
    const showCategories = categories.map((item, index) => {
        return (
            <button 
                type="button"
                className="filter-btn"
                key={index}
                onClick={() => filterItems(item)}
            >
                {item}
            </button>
        )
    })

    return (
        <div className="btn-container">
            {showCategories}
        </div>
    )
}
```

Eu gostei muito de como eu 'componentizei' a aplicação dividindo em partes e ficando bem mais profissional. Assim cada um cuida do que é seu dever e não fica só 1 App.jsx gigante. 

E percebi que o 


```tsx
import { auth, firebase } from "../services/firebase"

async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider() 
    // Criando o login

    const result = await auth.signInWithPopup(provider) 
    // Escolhendo como fazer o login, neste caso com um popup
    if (result.user) {
        const { displayName, photoURL, uid } = result.user

        if (!displayName || !photoURL) { 
            // Condicional para negar o login a usuários que não tenham foto ou nome
            throw new Error('Missing either Name or photo from Google Account')
        }

        setUser({ 
            // Definindo quais são as info do usuário
            id: uid,
            name: displayName,
            avatar: photoURL
        })
    }
}
```
E simpes assim temos um login com o Google :D


Agora esse é o código que eu usei para criar uma nova sala, usando o `FormEvent` para definir a 'tipagem' do typescript.
Depois dou um retorno se o nome da sala for vazio.
Seguindo o código, acesso o banco de dados e vou criar a sala, com o titulo e o id do usuário que criou a sala.
Feito isso só dou um `history.push()` e coloco a chave da sala.
Segue o código:
```tsx
import { useHistory } from 'react-router-dom'
const history = useHistory()
const [ newRoom, setNewRoom ] = useState('')

async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
        return
    }

    const roomRef = database.ref('rooms')
    const firebaseRoom = await roomRef.push({
        title: newRoom,
        authorId: user?.id
    })

    history.push(`/rooms/${firebaseRoom.key}`)
}
```

### Desenvolvimento Continuo

Nossa esse projeto me cansou, realmente foi bem grande. **Daqui em diante vou continuar seguindo e aprendendo sobre o react**, foi bem interessante criar o hook `useRoom` porque ele ajudou muito na parte de não repetir código e ficar mais organizado.
Então vou focar em React.js :D

## Author

- Linkedin - [Julio Henrique](https://www.linkedin.com/in/julio-h/)
- Email - juliohjesus@gmail.com
