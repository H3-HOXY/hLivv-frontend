/**
 * @since 
 * @author 이호연
 */

export const useImage = () => {
    return (
        (src: string) => {
            return (`${process.env.PUBLIC_URL}/img/${src}`)
        }
    )
}