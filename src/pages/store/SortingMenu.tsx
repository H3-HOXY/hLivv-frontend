/**
 * @since 
 * @author 이호연
 */

export const SortingMenu = () => {
    return (
        <div className="py-4">
            <nav className="flex justify-between">
                <div className="flex align-middle">
                    <input type="checkbox" id="stock" name="stock" value="stock"/>
                    <label htmlFor="stock"
                           className="px-3  rounded-md text-sm font-medium focus:outline-none  ">품절제외</label>
                </div>

                <div className="flex space-x-4">
                    <a href="#"
                       className="rounded-md text-sm font-medium text-gray-300 focus:outline-none  focus:text-gray-700">신상품순</a>
                    <a href="#"
                       className="rounded-md text-sm font-medium text-gray-300 focus:outline-none  focus:text-gray-700">판매순</a>
                    <a href="#"
                       className="rounded-md text-sm font-medium text-gray-300 focus:outline-none  focus:text-gray-700">낮은가격순</a>
                    <a href="#"
                       className="rounded-md text-sm font-medium text-gray-300 focus:outline-none  focus:text-gray-700">높은가격순</a>
                    <a href="#"
                       className="rounded-md text-sm font-medium text-gray-300 focus:outline-none  focus:text-gray-700">리뷰순</a>
                </div>
            </nav>
        </div>
    )
}