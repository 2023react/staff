// import React from 'react'

// const cvMaking = () => {

//   const renderEditorDialog = () => {

//     if (TYPES.editor.includes(update.title)) {
//       return (
//         <>
//           <BasicButtons onClick={() => handleClick()}>
//             ADD
//           </BasicButtons>
//           <EditorComponent onEdit={setConvertedData} update={update} />
//         </>
//       );
//     }

//     if (TYPES.formEditor.includes(update.title)) {
//       return (
//         <FormCV
//           handleClose={handleClose}
//           cvData={cvData}
//           update={update}
//           onClick={handleClick}
//           onEdit={setConvertedData}
//         />
//       );
//     }

//     if (TYPES.levelSlider.includes(update.title)) {
//       return (
//         <AutocompleteLevelSlider
//           handleClick={handleClick}
//           update={update}
//           handleClose={handleClose}
//         />
//       );
//     }

//     if (TYPES.autocomplete.includes(update.title)) {
//       return (
//         <LimitTags
//           cvData={cvData}
//           update={update}
//           onClick={handleClick}
//           onEdit={setConvertedData}
//           handleClose={handleClose}
//         />
//       );
//     }

//     return null;
//   };

//   return (
//     <div className={styles.editorDialog}>
//       <AlertDialogSlide open={open} handleClose={handleClose}>
//         {renderEditorDialog()}
//       </AlertDialogSlide>
//     </div>
//   );

// }

// export default cvMaking

// const onSubmit = async (data) => {
//   try {
//     signInWithEmailAndPassword(auth, data.email, data.password).then(
//       (currUser) => {
//         const docRef = doc(db, "users");
//         const d = getDoc(docRef);
//         console.log(d?.data().isUser);
//         dispatch(changeIsUser(d?.data().isUser));
//         console.log("try meja");
//       }
//     );
//     try {
//       if (location.pathname === "/company/login") {
//         dispatch(changeCurrentUser(null));
//         dispatch(changeIsUser(null));
//         signOut(auth);
//         navigate("/");
//         dispatch(openLogin());
//         return;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     navigate("/");
//   } catch (error) {}
// };
