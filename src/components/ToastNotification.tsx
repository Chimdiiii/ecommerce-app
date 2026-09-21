interface ToastNotificationProps {
    message: string;
}

function ToastNotification({ message }: ToastNotificationProps) {
    if (!message) return null;

    return (
        <div
            className="fixed top-5 right-5 bg-[#16a34a] text-white px-[25px] py-[15px] rounded-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] z-[9999] animate-[slideDown_0.3s_ease]"
        >
            ✅ {message}
        </div>
    );
}

export default ToastNotification;