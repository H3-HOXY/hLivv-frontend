export const useImage = () => {
    return (
        (src: string) => {
            return (`${process.env.PUBLIC_URL}/img/${src}`)
        }
    )
}