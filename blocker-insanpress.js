var head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css";var css="#adblock_insanpress{text-align:center;background:rgba(0,0,0,.95)!important;position:fixed;top:0;left:0;display:table;width:100%;height:100%;z-index:999999}.ndcyidc{vertical-align:middle;display:table-cell!important;text-align:center;visibility:visible!important;color:#fff!important}.smmpog{display:block!important;box-sizing:border-box!important;background-image:url(data:image/svg+xml;base64,PHN2ZyBpZD0iXzEiIGRhdGEtbmFtZT0iMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTg2IiBoZWlnaHQ9IjE4NiIgdmlld0JveD0iMCAwIDkzIDkzIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2Y3ZjdmN30uY2xzLTJ7ZmlsbDojZTcxZDM2O2ZpbGwtcnVsZTpldmVub2RkfTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9ImNscy0xIiBjeD0iNDkiIGN5PSI0OSIgcj0iMzQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik03MzAuODUgMjg0LjY0NWEyLjYzOCAyLjYzOC4wIDAgMC0uNzQ4LTEuODY5QTIuNTYgMi41Ni4wIDAgMCA3MjguMjcgMjgyYTIuNjI0IDIuNjI0LjAgMCAwLTIuNjE3IDIuNjE2VjMwMy45bDUuMi4wMTZWMjg0LjY0NXptNy4wNzYgMjAuMjM4YzAtNi4yLS4wMDktMTIuMzM5LS4wMDktMTIuNDQ1YTIuNTUgMi41NS4wIDAgMC0yLjUxLTIuNjQzIDIuNjM3IDIuNjM3LjAgMCAwLTIuNjQyIDIuNjE3djExLjUxaC45NjFhLjk1OC45NTguMCAwIDEtLjAwNiAxLjkxNWgtMS44MDljLS4wMzQuMC0uMDY5LjAtLjEuMGEuOTUxLjk1MS4wIDAgMS0uMTA4LS4wMDZsLTE2LjEzLS4wNTFhLjk1Ny45NTcuMCAwIDEtLjk1MS0uOS42MDguNjA4LjAgMCAxIDAtLjA2MS45NTcuOTU3LjAgMCAxIC45Ni0uOTU0aC45NTVWMzAxYS45NTguOTU4LjAgMCAxIDEuOTE1LjB2Mi44ODJsNS4yOTIuMDE2VjI3OS41NTZhMi42MjcgMi42MjcuMCAwIDAtMi42MTctMi42NDEgMi42NTIgMi42NTIuMCAwIDAtMi42NzUgMi42MTZ2MTcuNjM0YS45NTguOTU4LjAgMSAxLTEuOTE1LjBWMjg0LjU1OGEyLjYyNSAyLjYyNS4wIDAgMC0yLjYtMi42MTIgMi43IDIuNy4wIDAgMC0yLjcgMi42MTd2MjcuNjEzYTExLjY3MSAxMS42NzEuMCAwIDEgNy40MTEgMy40ODYgMTEuOSAxMS45LjAgMCAxIDMuNCA4LjQzMy45NTguOTU4LjAgMCAxLTEuOTE1LS4wMDhBMTAgMTAgMCAwIDAgNzE3LjI3NSAzMTdhOS43OTQgOS43OTQuMCAwIDAtNy4wMDYtMi45NTIuOTU3Ljk1Ny4wIDAgMS0uOTUzLS45NTdWMjk4LjNhMi42MjggMi42MjguMCAwIDAtNS4yNTYuMGMwIC4xMTkuMDIxIDEyLjMuMCAxNy42OTVhLjgyOC44MjguMCAwIDEgLjAxMi4xNSAxNi45MzQgMTYuOTM0LjAgMCAwIDMzLjg2Ni4yODMgMSAxIDAgMCAxLS4wMjEtLjJDNzM3LjkyNiAzMTMuOTg4IDczNy45MjggMzA5LjQyMSA3MzcuOTI2IDMwNC44ODN6bTI3LjE3LTIxLjU0OEw3NDEuNjY1IDI1OS45YTYuNDU4IDYuNDU4LjAgMCAwLTQuNi0xLjlINzAzLjkzMmE2LjQ1OCA2LjQ1OC4wIDAgMC00LjYgMS45bC01LjcxNCA1LjcxNGgwTDY3NS45IDI4My4zMzVhNi40NjQgNi40NjQuMCAwIDAtMS45IDQuNnYzMy4xMzZhNi40NTkgNi40NTkuMCAwIDAgMS45IDQuNkw2OTkuMzM1IDM0OS4xYTYuNDU4IDYuNDU4LjAgMCAwIDQuNiAxLjloMzMuMTM2YTYuNDU4IDYuNDU4LjAgMCAwIDQuNi0xLjlsNS43MTQtNS43MTRoMEw3NjUuMSAzMjUuNjY1YTYuNDYyIDYuNDYyLjAgMCAwIDEuOS00LjZWMjg3LjkzMkE2LjQ2MSA2LjQ2MS4wIDAgMCA3NjUuMSAyODMuMzM1em0tMzAuNzIxIDQ2LjE4NkExOC42NTggMTguNjU4LjAgMCAxIDcyMS4wODggMzM1YTE4LjkxMyAxOC45MTMuMCAwIDEtMTguOTMtMTguNjk0LjkyNy45MjcuMCAwIDEtLjAxMy0uMTU4Yy4wMjEtNS4zMDUuMC0xNy43MTguMC0xNy44NDNhNC41NTEgNC41NTEuMCAwIDEgNC41NDEtNC41MjloLjAxOWE0LjUxIDQuNTEuMCAwIDEgMi42MS44NDN2LTEwLjA2YTQuNTg1IDQuNTg1LjAgMCAxIDQuNjA3LTQuNTI4aC4wMThhNC40ODQgNC40ODQuMCAwIDEgMi41OTEuODM3di0xLjM0MWE0LjU3IDQuNTcuMCAwIDEgNC41OC00LjUyN2guMDE4YTQuNTQzIDQuNTQzLjAgMCAxIDQuNTI0IDQuNTZ2MS4zNjNhNC40NzggNC40NzguMCAwIDEgMi42MDYtLjgzNGguMDE5YTQuNDU4IDQuNDU4LjAgMCAxIDMuMTkyIDEuMzQ4IDQuNTM2IDQuNTM2LjAgMCAxIDEuMjk1IDMuMjEydjQuMDczYTQuNTI3IDQuNTI3LjAgMCAxIDIuNjMxLS44NDJoLjAxOWE0LjQ0MyA0LjQ0My4wIDAgMSA0LjQxNyA0LjU2MWMwIC4xNzcuMDIxIDE4LjAzMS4wIDIzLjU5MmEuOS45LjAgMCAxIC4wMjIuMkExOC42NTQgMTguNjU0LjAgMCAxIDczNC4zNzUgMzI5LjUyMXoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NzQgLTI1OCkiLz48L3N2Zz4=);width:93px!important;height:93px!important;background-size:93px 93px!important;margin:auto!important;background-repeat:no-repeat!important;background-position:center!important}.tegri{margin:.67em!important;font-size:26px!important;font-weight:700!important;display:block!important;box-sizing:border-box!important;margin-top:50px!important;letter-spacing:0!important}.uogtc{margin:1em!important;display:block!important;box-sizing:border-box!important;line-height:1.65!important;margin-bottom:50px!important}.vxyvvs{margin:0 15px 0 0!important;display:inline-block!important;background:0 0!important;border:1px solid rgba(256,256,256,.4)!important;border-radius:3px!important;color:#fff!important;text-transform:uppercase!important;font-size:13px!important;font-weight:700!important;padding:10px 45px 10px 25px!important;outline:0!important;cursor:pointer!important;background-repeat:no-repeat!important;background-position:75px 11px!important;box-sizing:border-box!important;line-height:15px!important;background-color:#34d058!important;border-color:#34d058!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:calc(100% - 50px)!important;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4xNTYiIGhlaWdodD0iMTEuMTI1IiB2aWV3Qm94PSIwIDAgMTEuMTU2IDExLjEyNSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7ZmlsbC1ydWxlOmV2ZW5vZGR9PC9zdHlsZT48L2RlZnM+PHBhdGggaWQ9InJlZnJlc2giIGNsYXNzPSJjbHMtMSIgZD0iTTU4OC42MTEgNTczLjY1MmEuMjIyLjIyMi4wIDAgMC0uMTYzLS4wNjloLTEuMzkzYS4yMTYuMjE2LjAgMCAwLS4yMTcuMTY2IDguOTYyIDguOTYyLjAgMCAxLS4zODUuODQ5IDMuNyAzLjcuMCAwIDEtNC41MTkgMS41MDkgMy43MzIgMy43MzIuMCAwIDEtMS4xNjgtLjc0bC45OTMtLjk5NGEuNDY0LjQ2NC4wIDAgMC0uMzI2LS43OWgtMy4yNWEuNDcuNDcuMCAwIDAtLjQ2NC40NjR2My4yNWEuNDYxLjQ2MS4wIDAgMCAuNzkuMzI2bC45MzYtLjkzNWE1LjU1IDUuNTUuMCAwIDAgMS43NjcgMS4xMzggNS40MzMgNS40MzMuMCAwIDAgMi4wNDkuNCA1LjMyMSA1LjMyMS4wIDAgMCAzLjQ2OC0xLjIwNyA1LjY0NiA1LjY0Ni4wIDAgMCAxLjk0NC0zLjE1Mi4xMjUuMTI1LjAgMCAwIC4wMDctLjA1MUEuMjIyLjIyMi4wIDAgMCA1ODguNjExIDU3My42NTJ6bS4xMTMtNS45NjdhLjQ1NS40NTUuMCAwIDAtLjY1My4wbC0uOTQzLjkzNmE1LjYyNSA1LjYyNS4wIDAgMC0xLjc3OC0xLjEzNiA1LjQ3OSA1LjQ3OS4wIDAgMC0yLjA2LS40IDUuMzU3IDUuMzU3LjAgMCAwLTMuNDgyIDEuMjA3IDUuNjY3IDUuNjY3LjAgMCAwLTEuOTU5IDMuMTUzdi4wNWEuMjM0LjIzNC4wIDAgMCAuMjMyLjIzMmgxLjQ0NGEuMjE4LjIxOC4wIDAgMCAuMjE4LS4xNjYgOC44IDguOC4wIDAgMSAuMzg0LS44NDkgMy43IDMuNy4wIDAgMSAzLjE2My0xLjc3IDMuNiAzLjYuMCAwIDEgMi41MzIuOTk0bC0xIDFhLjQ2NC40NjQuMCAwIDAgLjMyNi43OWgzLjI1YS40Ny40Ny4wIDAgMCAuNDY1LS40NjR2LTMuMjVBLjQ0NS40NDUuMCAwIDAgNTg4LjcyNCA1NjcuNjg1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU3Ny43MTkgLTU2Ny4wOTQpIi8+PC9zdmc+)!important}.xvwawzk{margin:0 15px 0 0!important;display:inline-block!important;background:0 0!important;border:1px solid rgba(256,256,256,.4)!important;border-radius:3px!important;color:#fff!important;text-transform:uppercase!important;font-size:13px!important;font-weight:700!important;padding:10px 45px 10px 25px!important;outline:0!important;cursor:pointer!important;background-repeat:no-repeat!important;background-position:130px 11px!important;box-sizing:border-box!important;line-height:15px!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:calc(100% - 50px)!important;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4xNTYiIGhlaWdodD0iMTIuMDYzIiB2aWV3Qm94PSIwIDAgMTEuMTU2IDEyLjA2MyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNmZmY7ZmlsbC1ydWxlOmV2ZW5vZGR9PC9zdHlsZT48L2RlZnM+PHBhdGggaWQ9ImRpc2FibGUiIGNsYXNzPSJjbHMtMSIgZD0iTTc0My4yNzggNTcwLjE2NmE1LjQ2MSA1LjQ2MS4wIDAgMC0xLjY0NC0xLjk1OS45LjkuMCAwIDAtLjY4OS0uMTgxLjg2My44NjMuMCAwIDAtLjYwOS4zNjIuODg1Ljg4NS4wIDAgMC0uMTc4LjY4Ni45LjkuMCAwIDAgLjM1OS42MTMgMy43IDMuNy4wIDAgMSAxLjEgMS4zMTMgMy43IDMuNy4wIDAgMSAuMSAzLjA5NCAzLjY4MSAzLjY4MS4wIDAgMS0xLjk4MSAxLjk4IDMuNjc0IDMuNjc0LjAgMCAxLTIuODguMCAzLjY3NCAzLjY3NC4wIDAgMS0xLjk4LTEuOTggMy43IDMuNy4wIDAgMSAuMDk0LTMuMDk0IDMuNzExIDMuNzExLjAgMCAxIDEuMS0xLjMxMy45LjkuMCAwIDAgLjM1OS0uNjEzLjg4NS44ODUuMCAwIDAtLjE3OC0uNjg2Ljg1OS44NTkuMCAwIDAtLjYwNS0uMzYyLjkxNi45MTYuMCAwIDAtLjY5My4xODEgNS41NCA1LjU0LjAgMCAwLTEuNzg1IDYuNjA5IDUuNTEgNS41MS4wIDAgMCAyLjk2NyAyLjk2NyA1LjUwOSA1LjUwOS4wIDAgMCA0LjMyNC4wIDUuNTEgNS41MS4wIDAgMCAyLjk2Ny0yLjk2NyA1LjQyNSA1LjQyNS4wIDAgMCAuNDQzLTIuMTYyQTUuNDkxIDUuNDkxLjAgMCAwIDc0My4yNzggNTcwLjE2NnptLTQuMzM1LTMuNzM2YS45MjguOTI4LjAgMCAwLTEuNTgxLjY1M3Y0LjY0MmEuOTI5LjkyOS4wIDAgMCAxLjg1Ny4wdi00LjY0MkEuODkyLjg5Mi4wIDAgMCA3MzguOTQzIDU2Ni40M3oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MzIuNzE5IC01NjYuMTU2KSIvPjwvc3ZnPg==)!important}#adsclose,#fanclose,#mgclose{font-size:27px;cursor:pointer;position:absolute;top:0;left:0;transition:all .2s;color:rgba(0,0,0,.3);display:flex}#adsclose:hover,#fanclose:hover,#mgclose:hover{color:#fff}";style.appendChild(document.createTextNode(css)),head.appendChild(style),!function(){function M(){var M=document.createElement("div");M.id="adblock_insanpress.com",M.innerHTML="<span id='adblock_insanpress' style='display: table !important; visibility: visible !important;'> <div class='ndcyidc' style=' display: table-cell !important; visibility: visible !important; '> <div class='smmpog' style='visibility: visible !important;display: block !important;'></div> <h1 class='tegri' style=' display: block !important; visibility: visible !important; '>\u0627\u0646\u062a\u0628\u0627\u0647! \u062a\u0645 \u0627\u0644\u0643\u0634\u0641 \u0639\u0646 \u0645\u0627\u0646\u0639 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062a!</h1> <p class='uogtc' style=' display: block !important; visibility: visible !important;    text-align: center; '>\u064a\u0631\u062c\u0649 \u062a\u0639\u0637\u064a\u0644 \u0628\u0631\u0646\u0627\u0645\u062c \u062d\u0638\u0631 \u0627\u0644\u0625\u0639\u0644\u0627\u0646\u0627\u062a \u0623\u0648 \u0648\u0636\u0639 \u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0628\u064a\u0636\u0627\u0621 \u0644\u0645\u0648\u0642\u0639\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u0648\u064a\u0628.</p> <a role='button' href='JavaScript:window.location.reload()' class='kghqeps vxyvvs' style='visibility: visible !important;display: inline-block !important;'>\u062a\u062d\u062f\u064a\u062b</a> <a role='button' class='xvwawzk' href='https://blocker-insanpress.blogspot.com' rel='nofollow' target='_blank' style='visibility: visible !important;display: inline-block!important;'>\u0637\u0631\u064a\u0642\u0629 \u0627\u0644\u0625\u064a\u0642\u0627\u0641</a> </div></span></div>",document.body.append(M),document.body.style.overflow="hidden"}var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",t.onerror=function(){M(),window.adblock=!0};var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)}();
