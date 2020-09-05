import cn from 'classnames'
import styles from 'src/components/molecules/alert/alert.module.scss'

export default function Alert({children, type}: {
    children: React.ReactNode,
    type: string,
}) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children}
        </div>
    )
}