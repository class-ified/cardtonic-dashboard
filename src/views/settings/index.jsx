
import ChangePasswordButton from "./change-password/ChangePasswordButton";
import EditProfiileButton from "./edit-profile/EditProfileButton";
import ChatWithUsButton from "./chat-with-us/ChatWithUsButton";
import SetPinButton from "./set-pin/SetPinButton";
import ShareWithFriendsButton from "./share-with-friends/ShareWithFriendsButton";
import Footer from "../../layout/admin/Footer"



const Settings = () => {
    return (
        <main className="settings">
            <div className="settings__heading">
                <h1 className="text-vbold text-blue-dark text-kindabig">Settings</h1>
            </div>
            <div className="settings__body">
                <ChangePasswordButton />
                <SetPinButton />
                <EditProfiileButton />
                <ChatWithUsButton />
                <ShareWithFriendsButton />
            </div>

            <Footer />
        </main>
    )
}

export default Settings;