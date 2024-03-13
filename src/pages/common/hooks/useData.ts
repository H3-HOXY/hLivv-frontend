/**
 * @since 
 * @author 이호연
 */

export const useData = () => {
    return (
        (src: string) => {
            return (`${process.env.PUBLIC_URL}/data/${src}`)
        }
    )
}