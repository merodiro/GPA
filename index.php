<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>Tip Calculator</title>
    <link href="style.css" rel="stylesheet" type="text/css">

</head>

<body>
    <div id="main">
        <h1>GPA Calculator</h1>
        <div id="calculator">
            <form>
                <label>
                    How many subjects do you study?
                    <br><span>
                    <input  type="number" id="coursesNo"></span>
                </label>
                <button type="button" id="calculate">Submit</button>
                </label>
            </form>
        </div>
        <div>
            <form id="courses">

            </form>
        </div>
        <div id="totalGPA">
            <span id="GPA">0.00</span>
        </div>
    </div>
    <script src="script.js" type="text/javascript">
    </script>
</body>

</html>
