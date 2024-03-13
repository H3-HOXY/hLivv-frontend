import {CategoryMenuItem, CategoryMenuItemProps} from "./CategoryMenuItem";

/**
 * @since
 * @author 이호연
 */

export type CategoryMenuProps = {
    categoryList: CategoryMenuItemProps[]
    onClick: (categoryId: "C000000001" | "C000000002" | "C000000003" | "C000000004") => void
}
export const CategoryMenu = (props: CategoryMenuProps) => {
    const slicedList = Array<{ categoryId: string, title: string }[]>();
    for (let i = 0; i < props.categoryList.length; i += 6) {
        slicedList.push(props.categoryList.slice(i, i + 6).map(item => {
            return {categoryId: item.categoryId, title: item.title}
        }))
    }

    return (
        <>
            <hr className="border-b-2 border-gray-500"/>
            {
                [...slicedList].map(
                    (array, idx) => {
                        return (
                            <div key={idx}>
                                <div className="grid pt-0 md:grid-cols-6 justify-items-center items-center px-2 pb-0">
                                    {array.map((item, idx) => (
                                        <CategoryMenuItem key={idx}
                                                          title={item.title}
                                                          categoryId={item.categoryId}
                                                          onClick={() => {
                                                              let category = item.categoryId as "C000000001" | "C000000002" | "C000000003" | "C000000004"
                                                              props.onClick(category)
                                                          }}
                                        />)
                                    )}
                                </div>
                                <hr className="border-b-2 border-gray-100"/>
                            </div>
                        )
                    })
            }
        </>
    )

}