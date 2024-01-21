import clsx from 'clsx'
import styles from './Form.module.scss'
import { CircleButton } from '../../../../shared/CircleButton/CircleButton'
import { ContactForm } from '../../../../features/ContactForm/ContactForm'

export const Form = () => {
  return (
    <section className={clsx('section', styles.form)}>
      <div className={styles.formContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.formText}>
            <div className={styles.formTitle}>
              <div className="descriptor white">Contact us</div>
              <h1>
                What can we <br /> help you with?
              </h1>
            </div>

            <div className={styles.group}>
              <p className="main-text">
                Lorem ipsum dolor sit amet consectetur. Quam enim nulla commodo
                mi. Lorem ipsum dolor sit amet consectetur. Quam enim nulla
                commodo mi.
              </p>
              <CircleButton text="Go to help centre" />
            </div>
          </div>
          <div className={styles.formElement}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
