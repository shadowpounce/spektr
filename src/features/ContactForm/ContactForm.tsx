import styles from './ContactForm.module.scss'

export const ContactForm = () => {
  return (
    <form className={styles.contactForm}>
      <div className={styles.group}>
        <label htmlFor="first-and-last-name">
          Write your first and last name*
        </label>
        <input
          type="text"
          name="first-and-last-name"
          id="first-and-last-name"
        />
      </div>
      <div className={styles.group}>
        <label htmlFor="company-email">Write your company Email*</label>
        <input type="text" name="company-email" id="company-email" />
      </div>
      <div className={styles.group}>
        <label htmlFor="message">How can we help you?</label>
        <textarea name="message" id="message" cols={30} rows={5}></textarea>
      </div>
      <button type="submit" className="button secondary">
        Submit
      </button>
      <label>
        By pressing submit you agree to the Pipe{' '}
        <a href="">
          <b> terms of service</b>
        </a>{' '}
        and{' '}
        <b>
          <a href="">privacy policy.</a>
        </b>
      </label>
    </form>
  )
}
