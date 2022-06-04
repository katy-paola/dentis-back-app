export const exclude = (user, ...keys) => {
    for (let key of keys) {
        if (key) {
            if (user[key]) {
                delete user[key]
            }
        }
    }
    return user
}
