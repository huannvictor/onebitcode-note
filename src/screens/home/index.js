import Image from "next/image";
import PresentationImage from "../../assets/images/presentation.png";
import Header from "../../components/header";
import styles from "./Home.module.css";

const { section, columnContainer, columnGroup, column, presentationImg } =
  styles;

const HomeScreen = () => (
  <>
    <Header />
    <section className={section}>
      <div className={columnContainer}>
        {/* container do rbx */}
        <div className={columnGroup}>
          {/* Coloum.Group do rbx */}
          <div className={column}>
            {/* Primeira coluna com o texto de tamanho 4 */}
            <div>
              {/* Título do rbx */}
              Crie, organize e acompanhe suas notas com facilidade. Transforme
              suas ideias em ação com nosso aplicativo de notas intuitivo e
              eficiente. Experimente agora e mantenha-se sempre inspirado.
            </div>

            <div>
              {/* Title com a opção subtitle do rbx */}
              Liberte sua criatividade e mantenha-se organizado com o nosso
              aplicativo de notas! Transforme suas ideias em realidade e nunca
              mais esqueça uma inspiração. Capture pensamentos, anote tarefas
              importantes e crie listas personalizadas para simplificar seu dia
              a dia. Com uma interface intuitiva e recursos avançados, nosso
              aplicativo de notas é a ferramenta perfeita para acompanhar sua
              vida agitada. Experimente agora e deixe sua mente fluir!
            </div>
          </div>
          <div className={column}>
            {/* Segunda coluna com a imagem de tamanho 6 e offset 1 */}
            <Image
              src={PresentationImage}
              alt="Imagem da apresentação do aplicativo"
              className={presentationImg}
            />
          </div>
        </div>
      </div>
    </section>
  </>
);

export default HomeScreen;
