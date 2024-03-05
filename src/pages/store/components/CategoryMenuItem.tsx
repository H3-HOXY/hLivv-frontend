import "../styles/CategoryMenuItem.scss"

export type CategoryMenuItemProps = {
    title: string
    categoryId: string
    onClick: (categoryId: string) => void
}
export const CategoryMenuItem = (props: CategoryMenuItemProps) => {
    return (
        <>
            <span className="CategoryMenuItem w-full py-3 text-[1rem] font-semibold"
                  onClick={() => props.onClick(props.categoryId)}
            >{props.title}</span>
        </>
    )
}