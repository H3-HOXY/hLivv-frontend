import {CategoryMenuItem} from "./CategoryMenuItem";

export type CategoryMenuProps = {
    categoryList: string[]
}
export const CategoryMenu = (props: CategoryMenuProps) => {
    const slicedList = Array<string[]>();
    for (let i = 0; i < props.categoryList.length; i += 7) {
        slicedList.push(props.categoryList.slice(i, i + 7))
    }

    return (
        <>
            <hr className="border-b-3 border-black"/>
            {
                [...slicedList].map(
                    (array, idx) => {
                        return (
                            <div key={idx}>
                                <div  className="grid pt-0 md:grid-cols-7 justify-items-center items-center px-2 pb-0">
                                    {/*<span className="text-xs font-semibold"/>*/}
                                    {array.map((item, idx) => (
                                        <CategoryMenuItem key={idx} title={item}
                                                          isLast={idx === props.categoryList.length - 1}
                                                          onClick={() => {
                                                          }}/>)
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