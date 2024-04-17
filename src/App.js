// Importing useState function from react.
import { useState } from "react";

// Importing logo from current directory.
import logo from './square.png';

// Importing App.css from current directory.
import './App.css';

// Importing EmojiDictionary from EmojiDictionary.js file.
import { EmojiDictionary } from './EmojiDictionary.js'

const EmojiList = Object.keys(EmojiDictionary);

function App() {

  // Setting useState to emojiMeaning.
  let [emojiMeaning, setEmojiMeaning] = useState(' ');

  // This function handles the user's input.
  const EmojiInputHandler = (event) => {

    // If there is nothing in the input box then set the output text to a whites space and return.
    if (event.target.value === ``) {
      setEmojiMeaning(' ');
      return;
    }

    // Meaning of the emoji entered by the user.
    const Meaning = EmojiDictionary[event.target.value];

    // If the meaning is undefined then setEmojiMeaning to `Emoji not found` else setEmojiMeaning to the actual meaning of emoji.
    if (Meaning === undefined) {
      setEmojiMeaning(`Emoji not found`);
    } else {
      setEmojiMeaning(Meaning);
    }

  }

  const EmojiClickHandler = (event) => {
    setEmojiMeaning(EmojiDictionary[event.target.innerText]);
  }

  return (
    <div id="App" className="flex">

      <header id="header" className="flex">
        <h1>Emoji Interpreter</h1>
        <img src={logo} alt="Author" height="40" id="header-image" />
      </header>

      <main id="main" className="flex">
        <input type="text" id="emoji-input" onChange={EmojiInputHandler} />

        <div id="output">
          {emojiMeaning}
        </div>

        <div id="emoji-list" className="flex">
          {
            EmojiList.map((emoji) => {
              return <span key={emoji} class="emoji" onClick={EmojiClickHandler}>{emoji}</span>
            })
          }
        </div>
      </main>
    </div>
  );
}

export default App;
