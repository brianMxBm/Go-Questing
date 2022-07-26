export const setMapCenterLocation =
  (latitude: number, longitude: number) =>
  (dispatch: (arg0: (latitude: number, longitude: number) => (dispatch: any) => void) => void) => {
    try {
      if (latitude || longitude) {
        dispatch(setMapCenterLocation);
      }
    } catch (error) {
      console.log(error);
    }
  };
