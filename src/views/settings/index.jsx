
import ChangePasswordButton from "./change-password/ChangePasswordButton";
import EditProfiileButton from "./edit-profile/EditProfileButton";
import ChatWithUsButton from "./chat-with-us/ChatWithUsButton";
import SetPinButton from "./set-pin/SetPinButton";



const Settings = () => {
    return (
        <main className="settings">
            <div className="settings__heading">
                <h1 className="text-vbold text-blue-dark text-kindabig">Settings</h1>
            </div>
            <div className="settings__body">
                <ChangePasswordButton />
                <EditProfiileButton />
                <ChatWithUsButton />
                <SetPinButton />
            </div>
        </main>
    )
}

export default Settings;