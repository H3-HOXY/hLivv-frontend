import {CategoryMenuItem, CategoryMenuItemProps} from "./CategoryMenuItem";


export type CategoryMenuProps = {
    categoryList: CategoryMenuItemProps[]
    onClick: (categoryId: string) => void
}
export const CategoryMenu = (props: CategoryMenuProps) => {
    return (
        <>
            <hr className="border-b-3 border-black"/>
            <div>
                <div
                    className="grid pt-0 md:grid-cols-7 justify-items-center items-center px-2 pb-0 cursor-pointer    ">
                    {
                        props.categoryList.map(
                            (item, idx) => {
                                return (
                                    <CategoryMenuItem key={idx} title={item.title} categoryId={item.categoryId}
                                                      onClick={props.onClick}
                                    />
                                )
                            }
                        )

                    }
                </div>
                <hr className="border-b-2 border-gray-100"/>
            </div>
        </>
    )

}