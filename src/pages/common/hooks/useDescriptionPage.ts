export const useDescriptionPage = () => {
    return (
        (page: string) => {
            return (`${process.env.PUBLIC_URL}/desc/${page}`)
        }
    )
}