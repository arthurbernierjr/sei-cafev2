// import styles from './ReviewPageComponents.module.scss'
export default function Banner({title,description}){
     return(
          <>
          <div className={styles.header}>
               <div>
                    <h1 className={styles.displayOne}>{title}</h1>
                    <p>
                         {description}
                    </p>
               
               </div>


          </div>
          </>
     )
}