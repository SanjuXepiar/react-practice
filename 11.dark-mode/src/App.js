import "./App.css";
import { useState } from "react";
function App() {
  const [dark, setDark] = useState(false);
  return (
    <main className={dark ? "nightLight" : "dayLight"}>
      <button onClick={() => setDark(!dark)} style={{ background: "red" }}>
        {dark ? "lightM" : "darkM"}
      </button>
      <div className="App">
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            porttitor, urna et rhoncus aliquet, sapien nunc ullamcorper lacus,
            vel vestibulum ipsum sapien in tellus. Quisque iaculis, tortor vel
            venenatis fringilla, urna tortor viverra dolor, ut convallis quam
            justo et nisl. Vestibulum vitae vestibulum sem, eu lobortis ex.
            Proin at fringilla erat. Duis ac bibendum justo. Ut vulputate risus
            ut ipsum egestas, ut consectetur nulla ultrices. Vestibulum tempor
            felis eu urna volutpat, nec lacinia lacus auctor. Curabitur ac
            convallis justo. Mauris sed felis ut elit varius condimentum. Sed
            tincidunt commodo tincidunt. Curabitur at posuere odio, eu viverra
            velit. Fusce venenatis, massa vitae euismod fringilla, libero augue
            finibus quam, id tincidunt sem nisl vel urna. Sed vel mauris non
            augue suscipit dictum. Aenean hendrerit, odio a suscipit facilisis,
            sem velit malesuada libero, et tempus ligula metus vel orci. Ut
            feugiat lacinia neque, in iaculis orci elementum non. Curabitur
            ullamcorper lobortis felis, ut tincidunt libero pellentesque non.
            Vivamus bibendum sem vitae urna dignissim bibendum. Proin elementum
            fringilla mauris a eleifend. Phasellus hendrerit metus quis ipsum
            tempor, at facilisis justo tincidunt. Integer vestibulum leo ut elit
            feugiat, ac vestibulum dolor fermentum. Vivamus in vestibulum
            ligula. In suscipit massa in massa pellentesque lacinia. Nullam vel
            velit urna. Sed suscipit interdum elit, at auctor dui tristique ut.
            Suspendisse potenti. Morbi vel massa eu justo luctus facilisis a id
            justo. Vivamus vitae condimentum erat. Etiam hendrerit libero eget
            nisl efficitur, in ultrices augue fermentum. Quisque rhoncus nisi
            urna, in commodo lectus vulputate vel. Aliquam nec mi ut elit
            vestibulum viverra. Aenean ut neque ac arcu volutpat eleifend ut sit
            amet neque. Curabitur ac mi vel tellus feugiat interdum. Nulla
            lacinia, massa eu rhoncus suscipit, lacus justo bibendum dolor, id
            varius leo nulla vitae mauris. Aenean vehicula mauris et arcu
            cursus, at eleifend lacus hendrerit. Aliquam erat volutpat. Duis
            laoreet arcu sed sapien dignissim, in tincidunt sapien facilisis.
            Integer non fermentum libero, et bibendum tellus.
          </p>

          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
        </section>
      </div>
    </main>
  );
}

export default App;
