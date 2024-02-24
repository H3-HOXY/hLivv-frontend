import "../styles/CategoryMenuItem.scss"
export type CategoryMenuItemProps = {
    title: string
    isLast: boolean
    onClick: () => void
}
export const CategoryMenuItem = (props: CategoryMenuItemProps) => {
    return (
        <>
            <span className="CategoryMenuItem w-full py-4 text-[1rem] font-semibold">{props.title}</span>
        </>
    )
}