/**
 * @since 
 * @author 이호연
 */

export const useDescriptionPage = () => {
    return (
        (page: string) => {
            return (`${process.env.PUBLIC_URL}/desc/${page}`)
        }
    )
}