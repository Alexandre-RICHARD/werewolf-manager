// Utilities files to handle all error append in back and save them to DB
export const errorSaver = async (context: string, errorMessage: string) => {
    const errorApiUrl = import.meta.env.VITE_ERROR_API_URL;

    await fetch(errorApiUrl + "/error", {
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        "method": "POST",
        "body": JSON.stringify({
            "projectName": import.meta.env.VITE_PROJECT_NAME,
            "context": context,
            "errorMessage": errorMessage,
        }),
    });
};
