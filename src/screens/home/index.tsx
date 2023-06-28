import Image from "next/image";
import PresentationImage from "../../assets/images/presentation.png";
import styles from "./Home.module.css";

const {
  section,
  columnContainer,
  columnGroup,
  column,
  title,
  subtitle,
  presentationImg,
} = styles;

const HomeScreen = () => (
  <>
    <section className={section}>
      <div className={columnContainer}>
        {/* container do rbx */}
        <div className={columnGroup}>
          {/* Column.Group do rbx */}
          <div className={column}>
            {/* Primeira coluna com o texto de tamanho 4 */}
            <div className={title}>
              {/* Título do rbx */}
              Crie, organize e acompanhe suas notas com facilidade. Transforme
              suas ideias.
            </div>

            <div className={subtitle}>
              {/* Title com a opção subtitle do rbx */}
              Liberte sua criatividade e mantenha-se organizado com o nosso
              aplicativo de notas! Transforme suas ideias em realidade e nunca
              mais esqueça uma inspiração. Capture pensamentos, anote tarefas
              importantes e crie listas personalizadas para simplificar seu dia
              a dia.
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
