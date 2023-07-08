import Styles from './app.module.css';

function App() {
  return (
    <div className={Styles.wrapper}>
      <main className={Styles.main}>
        <section className={Styles.sidebar}>Steps</section>
        <section className={Styles.formView}>
          <form className={Styles.form}>Form</form>
          <footer className={Styles.footer}>Footer</footer>
        </section>
      </main>
    </div>
  );
}

export default App;
