function generateMenu() {
    var menuCode = `
    <table summary="Table for page layout." id="tlayout">
    <tr valign="top">
    <td id="layout-menu">
    <div class="menu-category">About</div>
    <div class="menu-item"><a href="index.html" class="current">Home</a></div>
    <div class="menu-item"><a href="CV_January21 (1).pdf">CV</a></div>
    <div class="menu-item"><a href="https://www.linkedin.com/in/srinivasan-subramaniyan22/">Linkedin</a></div>
    <div class="menu-item"><a href="https://scholar.google.com/citations?user=luGswuwAAAAJ&hl=en&oi=ao">Google Scholar</a></div>
    <div class="menu-item"><a href="Academics.html">Academics</a></div>
    <div class="menu-category">Research</div>
    <div class="menu-item"><a href="publications.html">Publications</a></div>
    <div class="menu-item"><a href="awards.html">Awards</a></div>
    <div class="menu-category">Work Experience</div>
    <div class="menu-item"><a href="internship.html">Internships</a></div>
    <div class="menu-item"><a href="fulltime.html">Fulltime</a></div>
    <div class="menu-item"><a href="ta.html">TA&nbsp;duties</a></div>
</td>
</tr>
</table>
       
    `;

    // Insert the menu code into the HTML document
    document.getElementById("menu-container").innerHTML = menuCode;
}

