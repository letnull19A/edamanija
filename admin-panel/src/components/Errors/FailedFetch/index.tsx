import style from './../style.module.css'

type TErrorProps = {
  error: Error
}

export default function FailedFatch(props: TErrorProps) {
  return (
    <div className={style.errorContainer}>
      <div className={style.errorHeader}>
        <i
          className={
            'pi pi-exclamation-circle ' + style.errorIcon
          }
        ></i>
        <span>Ошибка запроса к серверу</span>
      </div>
      <span className={style.errorMesage}>
        {props.error.message}
      </span>
      <span className={style.errorStack}>
        {props.error.stack}
      </span>
    </div>
  )
}
