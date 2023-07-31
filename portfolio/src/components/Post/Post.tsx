import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="https://techcrunch.com/wp-content/uploads/2023/03/tiktok-us-flag.jpg?w=940&h=465&crop=1" />
      </div>
      <div className="texts">
        <h2>Mussum Ipsum, cacilds vidis litro abertis</h2>
        <p className="info">
          <Link to="/perfil" className="author link link--nav">
            Adriano Barbosa
          </Link>
          <time>2023-01-06 16:45</time>
        </p>

        <p className="summary">
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis.Interessantiss quisso pudia ce
          receita de bolis, mais bolis eu num gostis.Leite de capivaris, leite
          de mula manquis sem cabeça.Mauris nec dolor in eros commodo tempor.
          Aenean aliquam molestie leo, vitae iaculis nisl.
        </p>
      </div>
    </div>
  );
};

export default Post;
