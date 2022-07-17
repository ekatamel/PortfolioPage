
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/img/ekaterina_melnichuk.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Ekaterina's portfolio page summarizing her experience, education and skills as a web developer"
    />
    <meta
      name="author"
      content="Ekaterina Melnichuk"
    />
    <link rel="stylesheet" href="{{mix("css/style.css")}}">
    {{-- <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> --}}
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    {{-- <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> --}}
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side ro
      uting and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <script
      src="https://kit.fontawesome.com/5f0205c008.js"
      crossorigin="anonymous"
    ></script>
    <title>Ekaterina's portfolio page</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
    <script src="{{mix('js/index.js')}}"></script>
  </body>
</html>
