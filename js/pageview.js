const PageView = (function() {
  // fileprivates... 
  const PV_API_BASE = "http://127.0.0.1:23366"
  const PV_API_CONF = {
    PageComments: PV_API_BASE + "/api/get",
    PageViews: PV_API_BASE + "/api/pv",
  }
  const WrappedPost = function(url, content, okCallback, faliedCallback) {
    axios.post(url, content, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    })
    .then(function (response) {
      if (!response.data.success) {
        throw new Error(response.data.msg);
      }
      okCallback(response.data.data)
    })
    .catch(function (error) {
      faliedCallback(error)
    });
  }

  // page views
  const fillInPv = function(pv) {
    $(".hp-pv-count").html(pv)
  }

  // comments
  const fillInComments = function(comments) {
    function makeElem(comm) {
      const elem = $(`
        <li class="hp-comm">
          <div class="info">
            <span class="name">${comm.nick}</span>&nbsp;
            <span class="date">${comm.date}</span>
          </div>

          <div class="content">
            ${comm.content_marked}
          </div>
        </li>
      `)
      
      return elem
    }

    let commContainer = $(".hp-comments")
    if (commContainer.length) {
      for (let comm of comments) {
        if (comm.visible) {
          const elem = makeElem(comm)
          commContainer.append(elem)
        }
      }
    }
  }

  // exports...
  return {
    // gets page comments
    getPageComments: function() {
      const pagePath = HpUtils.getCurrentPagePath()
      WrappedPost(PV_API_CONF.PageComments, {
        page_key: pagePath,
      }, res => {
        fillInComments(res.comments)
      }, err => {
        console.error(err)
      })
    },
    // gets page views
    getPageViews: function() {
      const pagePath = HpUtils.getCurrentPagePath()
      WrappedPost(PV_API_CONF.PageViews, {
        page_key: pagePath,
      }, res => {
        fillInPv(res.pv)
      }, err => {
        console.error(err)
      })
    }
  }
})()