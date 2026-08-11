const productList = document.querySelector("#products");
const loadButton = document.querySelector("#load-btn");
const feedbackForm = document.querySelector("#feedback-Form");
const result = document.querySelector("#result");


// =============================
// LOAD PRODUCTS
// =============================

async function loadProduct() {

    productList.innerHTML =
        "<p class='text-muted'>Loading products...</p>";

    try {

        // fetch() must be awaited
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts?_limit=3"
        );

        // Check HTTP error
        if (!response.ok) {
            throw new Error(
                `HTTP Status Code: ${response.status}`
            );
        }

        // Convert response to JSON
        const products = await response.json();

        // Display products
        productList.innerHTML = products.map(
            (product) => `
                <div class="product">
                    <h3>${product.title}</h3>
                    <p>${product.body}</p>
                </div>
            `
        ).join("");

    } catch (error) {

        productList.innerHTML =
            `<p class="text-danger">
                Failed to load products: ${error.message}
            </p>`;
    }
}


// Load Products button
loadButton.addEventListener("click", loadProduct);


// =============================
// FEEDBACK FORM
// =============================

feedbackForm.addEventListener("submit", async (e) => {

    // Prevent page refresh
    e.preventDefault();

    // Get form values
    const username =
        document.querySelector("#name").value.trim();

    const usermessage =
        document.querySelector("#messsage").value.trim();


    result.innerHTML =
        "<p class='text-muted'>Sending user feedback...</p>";


    try {

        // Send POST request
        const resp = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: username,
                    message: usermessage
                })
            }
        );


        // Check HTTP error
        if (!resp.ok) {
            throw new Error(
                `HTTP Status Code: ${resp.status}`
            );
        }


        // Convert response to JSON
        const savedfeedback = await resp.json();

        console.log("Saved Feedback:", savedfeedback);


        // Success message
        result.innerHTML = `
            <div class="alert alert-success">
                <p class="mb-0">
                    Thank you ${username}!!!
                    Your feedback was submitted successfully.
                </p>
            </div>
        `;


        // Clear form
        feedbackForm.reset();


    } catch (error) {

        result.innerHTML = `
            <p class="text-danger">
                Failed to send the feedback:
                ${error.message}
            </p>
        `;
    }

});