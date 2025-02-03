import Cookies from 'js-cookie'

export const ProfileComponent = () => {
    const userData = JSON.parse(Cookies.get('user'))
    return (
        <div className="w-full max-w-sm mt-20 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col mt-8 items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={userData.image_url} alt="Bonnie image"/>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{userData.name}</h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">{userData.email}</span>
            </div>
        </div>
    )
}