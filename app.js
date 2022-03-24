const catItem = (
  <li>
    <img src="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
  </li>
);
const favorites = (
  <ul class="favorites">
    {catItem}
    {catItem}
    {catItem}
  </ul>
);

const mainCard = (
  <div class="main-card">
    <img
      src="https://cataas.com/cat/60b73094e04e18001194a309/says/react"
      alt="고양이"
      width="400"
    />
    <button>🤍</button>
  </div>
);

const title = <h1>1번째 고양이 가라사대2</h1>;
const form = (
  <form>
    <input type="text" name="name" placeholder="영어 대사를 입력해주세요" />
    <button type="submit">생성</button>
  </form>
);

const app = (
  <div>
    {title}
    {form}
    {mainCard}
    {favorites}
  </div>
);

const 여기다가그려 = document.querySelector(".app");

ReactDOM.render(app, 여기다가그려);
