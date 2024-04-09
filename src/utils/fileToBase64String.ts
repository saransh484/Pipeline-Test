export const fileToBase64String = (file: File) => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject("No file provided");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (readerEvent: ProgressEvent<FileReader>) {
      const base64String = (readerEvent.target as FileReader).result;

      resolve(base64String);
    };

    reader.readAsDataURL(file);

    reader.onerror = function (error) {
      reject(error);
    };
  });
};
