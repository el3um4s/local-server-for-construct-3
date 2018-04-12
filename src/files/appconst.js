'use strict';

function returnConst (nomeConst) {
	switch (nomeConst) {
		case 'LOCAL_SERVER_package_json':
			return LOCAL_SERVER_package_json;
			break;
		case 'LOCAL_SERVER_cert_pem':
			return LOCAL_SERVER_cert_pem;
			break;
		case 'LOCAL_SERVER_key_pem':
			return LOCAL_SERVER_key_pem;
			break;
		case 'LOCAL_SERVER_npminstall_bat':
			return LOCAL_SERVER_npminstall_bat;
			break;
		case 'LOCAL_SERVER_npmwait_bat':
			return LOCAL_SERVER_npmwait_bat;
			break;
		case 'LOCAL_SERVER_npmrunserve_bat':
			return LOCAL_SERVER_npmrunserve_bat;
			break;
		case 'LOCAL_SERVER_npmrunservessl_bat':
			return LOCAL_SERVER_npmrunservessl_bat;
			break;
		case 'LOCAL_SERVER_generalfile_settings':
			return LOCAL_SERVER_generalfile_settings;
			break;
		case 'LOCAL_SERVER_generalinstalled_settings':
			return LOCAL_SERVER_generalinstalled_settings;
			break;
		default:
			return '';
	}
}

// se questo file è presente nella cartella allora sono stati scaricati i file
const LOCAL_SERVER_generalfile_settings = `LOCAL_SERVER_generalfile_settings
cert.pem
key.pem
npmintall.bat
npmrunserve.bat
npmwait.bat
package.json
`

// se questo file è presente allora è stato dato il comando npm install
const LOCAL_SERVER_generalinstalled_settings = `generalinstalled_settings=OK`

// file bat per installare le dependencies per eseguire il server locale
const LOCAL_SERVER_npminstall_bat = `SET mypath=%~dp0
echo %mypath:~0,-1%
CD /D %mypath%
call npm install 
call npmwait.bat`;

// un semplice messaggio per mostrare l'output di npminstall
const LOCAL_SERVER_npmwait_bat = `echo Press any key to continue...
pause > nul
exit /b`;

// avvia il server locale (http)
const LOCAL_SERVER_npmrunserve_bat = `SET mypath=%~dp0
echo %mypath:~0,-1%
CD /D %mypath%
call npm run serve`;

// avvia il server locale (https)
const LOCAL_SERVER_npmrunservessl_bat = `SET mypath=%~dp0
echo %mypath:~0,-1%
CD /D %mypath%
call npm run servessl`;

// package.json per scaricare il pacchetto npm: http-server
const LOCAL_SERVER_package_json = `{
  "name": "localServer",
  "version": "0.1.0",
  "description": "A simple way to star a local server (https)",
  "main": "index.js",
  "scripts": {
	"serve": "./node_modules/.bin/http-server -o -a localhost -p 65432 --cors",
    "servessl": "./node_modules/.bin/http-server -o -a localhost -p 8080 -C cert.pem -K key.pem --ssl --cors"
  },
  "author": "Strani Anelli",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/el3um4s/local-server-for-construct-3"
  },
  "keywords": [
    "construct3",
    "local server",
    "c3addons"
  ],
  "dependencies": {
    "http-server": "^0.11.1"
  }
}`;

// per aprire una connessione https sul server locale
const LOCAL_SERVER_cert_pem =`-----BEGIN CERTIFICATE-----
MIIFjDCCA3SgAwIBAgIJAMphKyNRVrieMA0GCSqGSIb3DQEBCwUAMIGBMQswCQYD
VQQGEwJVUzELMAkGA1UECAwCTUExDzANBgNVBAcMBkJvc3RvbjETMBEGA1UECgwK
RXhhbXBsZSBDbzEQMA4GA1UECwwHdGVjaG9wczELMAkGA1UEAwwCY2ExIDAeBgkq
hkiG9w0BCQEWEWNlcnRzQGV4YW1wbGUuY29tMB4XDTE4MDMwMTIzMzIwOVoXDTIw
MTEyNDIzMzIwOVowgYgxCzAJBgNVBAYTAlVTMQswCQYDVQQIDAJNQTEPMA0GA1UE
BwwGQm9zdG9uMRMwEQYDVQQKDApFeGFtcGxlIENvMRAwDgYDVQQLDAd0ZWNob3Bz
MRIwEAYDVQQDDAlsb2NhbGhvc3QxIDAeBgkqhkiG9w0BCQEWEWNlcnRzQGV4YW1w
bGUuY29tMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAt6G/MEaKlTYg
tZe7UNKvBxg9kW6u7oo3BRt9h3cJdnb3JdRulzj1Ii9KDG15tm6kJSy9t4IwHoKT
KtvCQApXymt3WBKuflnKNNVkBgcBL0kFnNyOC6n7nsauD4Wkzwr7ORBycty7eHzn
HiB1sPNAQsoCIW1IKiAzJ4s+Rp81OiDux1Px+q1XPcaa7s/c7dQM5HvHlfK3LRO9
OMQQJ6tRSRbpjn3mOjbAMglkoYPyW/5nC+WTONhrTHGVR9Y2xTwUpB2M3Bcq/UPL
7upJKnhMmCs1JSQHEnCUKxBUoeeM5mvvT8tvP6P7oVn8K8v7ho4jpPgzogmLOn65
bPXUfpP/sz5qstn1H64l8QSVCTNCaoDyCix8+9EC4rPrSLHoqMfJ8ReLUmoZXXDP
hVsSaPuDl0pEf1wrkm6Mksh43DWKRgFQXeCmfJBmOyhtj4JkTbm+dvUF+115hwid
G2RYCiuC5v/U2yOMXl4AmmyTvbmuFX7oTCyAgsnoVtI15bVP9LVu8pcLwKhSVFDA
a7SKE+rmxQyCnf07NhH+a348kDsDFauESBNfZqDFjdbLILch3U1Wl/yX/Uq9uKBj
tLIwE5Z3q676bvneArpxYphlhZtk2kVPaCHfBwt6JHQzyozSPMYmZa4pYo59IjPW
0lWrk5rHAXQlnwcMH1MuGbwZkXCt3kUCAwEAATANBgkqhkiG9w0BAQsFAAOCAgEA
rBIAEUTh5GvSUoX2uWLaBzmOSfqQHJ77Up7HN0gxUWA5nGMjwO4NBdF2nNelKwJp
9jhjDE1HRuvuPQi6xOEO51dResAY7cHDifFHsHyCcPGKfEXXm8SqLvVQ0JabUoU+
7n3tEFjxstL7TD0vSI4tpqODUzoogQWWPQo6vK1nybwzVoB8cZy54dC/CYGFqAg9
8Nhp59gps6R/k8BUdRyYHT2+tuwGbihuDw9Je7s/7yXJ06CwjdY9CwyP08VbFNww
zJAO41dwauEv/k6YUT4Ih2zO3uMs+rELZmZqp9811Neqmmm3/YuzaVK90ibpFQCm
//OX10Hm0yaU6vH/6AT+6kwUD7aumth8UGiY0GnVx4GUew1u+3sOO+45gRHl2l+M
o0cNQBRO0MwDhZkp6YEw+gVF2vxkLrGg7RcWXGlWvvFAn4yfKGxnnbO0NKKYcPLz
WW1XFnE7puBHdic5bMa4/mwj8ljXxokpcsQagBMIWYV8xpHDhirQAqCZLa0WgfSa
UEW6d3rkVLwRuryuU6ZHt11zpRwFAbwt34LNygpysK6I1UKY2Kt0bSeVDP99Jjfp
dIe7/t/6+tEOqfaWpcgCbH92LQn8Oc7e1cNHYFOy2G0a59GpNcLrCOSTi5YyvE6f
SIVuxuQnPdWC4ybQezGU6jDL9H6tXeTBm7lVRDcckC4=
-----END CERTIFICATE-----
`;

// per aprire una connessione https sul server locale
const LOCAL_SERVER_key_pem =`-----BEGIN RSA PRIVATE KEY-----
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
-----END RSA PRIVATE KEY-----
`;