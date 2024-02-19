**Backend API Test Report**

**Date**: February 19, 2024

**Objective**: 
The objective of this report is to provide details about the testing performed on the backend API developed for a library of books. The API includes endpoints for user authentication, retrieving books based on user type, adding a book, and deleting a book.

**Summary**:
The backend API was thoroughly tested to ensure that it meets the specified requirements. The testing included various scenarios such as user authentication, accessing book lists based on user type, adding new books, and deleting existing books. Both positive and negative test cases were executed to validate the functionality and error handling of the API.

**Test Cases and Results**:

1. **Login Endpoint**:
    - **Test Case 1**: Valid credentials provided.
        - **Input**: 
            ```json
            {
                "username": "admin",
                "password": "admin"
            }
            ```
        - **Expected Output**: Successful login with a JWT token.
        - **Result**: Passed

    - **Test Case 2**: Invalid credentials provided.
        - **Input**: 
            ```json
            {
                "username": "invalid_user",
                "password": "invalid_password"
            }
            ```
        - **Expected Output**: Unauthorized access with an error message.
        - **Result**: Passed

2. **Home Endpoint**:
    - **Test Case 1**: Regular user requests book list.
        - **Input**: JWT token for regular user.
        - **Expected Output**: List of books for regular user.
        - **Result**: Passed

    - **Test Case 2**: Admin user requests book list.
        - **Input**: JWT token for admin user.
        - **Expected Output**: List of books for admin user.
        - **Result**: Passed

3. **AddBook Endpoint**:
    - **Test Case 1**: Admin user adds a new book.
        - **Input**: 
            ```json
            {
                "bookName": "New Book",
                "author": "Jane Doe",
                "publicationYear": 2023
            }
            ```
        - **Expected Output**: Success message.
        - **Result**: Passed

    - **Test Case 2**: Invalid parameters provided.
        - **Input**: 
            ```json
            {
                "bookName": "New Book",
                "author": "Jane Doe",
                "publicationYear": "invalid_year"
            }
            ```
        - **Expected Output**: Error message indicating invalid parameters.
        - **Result**: Passed

4. **DeleteBook Endpoint**:
    - **Test Case 1**: Admin user deletes an existing book.
        - **Input**: 
            ```json
            {
                "bookName": "Sample Book"
            }
            ```
        - **Expected Output**: Success message.
        - **Result**: Passed

    - **Test Case 2**: Invalid parameters provided.
        - **Input**: 
            ```json
            {
                "bookName": 12345
            }
            ```
        - **Expected Output**: Error message indicating invalid parameters.
        - **Result**: Passed

**Conclusion**:
The backend API has been successfully developed and tested to meet the specified requirements. All endpoints perform as expected, and appropriate error handling is in place. The API is ready for deployment and integration with the frontend application.

**Additional Information**:

API Endpoints for Testing:
- Login: POST `/login`
    - Test data:
        ```json
        {
            "username": "admin",
            "password": "admin"
        }
        ```
- Home: GET `/home`
    - Requires JWT token in the authorization header.
- AddBook: POST `/addBook`
    - Requires JWT token in the authorization header.
    - Test data:
        ```json
        {
            "bookName": "New Book",
            "author": "Jane Doe",
            "publicationYear": 2023
        }
        ```
- DeleteBook: DELETE `/deleteBook`
    - Requires JWT token in the authorization header.
    - Test data:
        ```json
        {
            "bookName": "Sample Book"
        }
        ```

**Note**: Replace `<your_jwt_token>` with the actual JWT token obtained after successful login for endpoints requiring authorization.