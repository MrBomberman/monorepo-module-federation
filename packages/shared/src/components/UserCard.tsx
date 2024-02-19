export const UserCard = ({ username }: { username?: string }) => {
    return (
        <div style={{ border: '1px solid green', padding: '15px' }}>
            username : {username ?? 'user'}
            <div>password: 128243902489</div>
        </div>
    )
}