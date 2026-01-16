import { Container } from '../../components/Container/Container';
import { Logo } from '../../components/Logo/Logo';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';

type MainTemplateProps = {
  children: React.ReactNode;
};

function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
        <Menu />

        {children}

        <Footer />
      </Container>
    </>
  );
}

export default MainTemplate;
