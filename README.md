# Setting Up Your `.env` File in the Backend Directory

Follow the steps below to create a `.env` file for your backend and configure the `MONGO_URI` environment variable:

## Steps to Create and Configure the `.env` File

1. **Navigate to the Backend Directory:**
   - Open your terminal and change the directory to the backend folder of your project using the command:
     ```bash
     cd backend
     ```

2. **Create the `.env` File:**
   - Inside the backend directory, create a file named `.env` using your terminal or file explorer.
     ```bash
     touch .env
     ```

3. **Add the Required Environment Variable:**
   - Open the `.env` file in a text editor and add the following line:
     ```env
     MONGO_URI=your_mongodb_connection_string_here
     ```

   - Replace `your_mongodb_connection_string_here` with your actual MongoDB connection string. Ensure there are no spaces around the `=` sign.

4. **Save the File:**
   - Save the `.env` file and close the editor.


   - Example `.env` File
   Here is an example of a completed `.env` file:

   ```env
   MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
   ```

5. **Run Backend**
   - Open the terminal.
     ```bash
     cd backend
     npm start
     ```

6. **Run Frontend**
   - Open the terminal.
     ```bash
     cd frontend
     npm run dev
     ```

### Important Notes:
- Never share your `.env` file or its contents publicly.
- For production, consider using secure methods to manage environment variables, such as using a secret manager.

By following these steps, your application will be set up correctly!
