(function() {
  var $ascvdScreen = $('.js-ascvd-screen');
  var $surveyFillScreen = $('.js-survey-fill-screen');
  var $canaFeedScreen = $('.js-cana-feed-screen');
  var $backButton = $('.js-back-button');
  var $contactMeCaption = $('.js-contact-me-caption');
  var $contactMe = $('.js-contact-me');
  var $githubCaption = $('.js-github-caption');
  var $github = $('.js-github');
  var $stackOverflowCaption = $('.js-stack-overflow-caption');
  var $stackOverflow = $('.js-stack-overflow');
  var $cubeUtilitiesCaption = $('.js-cube-utilities-caption');
  var $cubeUtilities = $('.js-cube-utilities');
  var $canaFeedCaption = $('.js-cana-feed-caption');
  var $canaFeed = $('.js-cana-feed');
  var $surveyFillCaption = $('.js-survey-fill-caption');
  var $surveyFill = $('.js-survey-fill');
  var $aboutMeCaption = $('.js-about-me-caption');
  var $aboutMe = $('.js-about-me');
  var $ascvdRiskCaption = $('.js-ascvd-risk-caption');
  var $ascvdRisk = $('.js-ascvd-risk');
  var $homeScreen = $('.js-home-screen');


  var firstRow = 172-35;
  var firstDefault = 172;

  var secondRow = 172-35;
  var secondDefault = 172;

  $(document).ready(function() {
    $ascvdScreen.hide();
    $surveyFillScreen.hide();
    $canaFeedScreen.hide();
    $backButton.hide();
  });

  $aboutMe.hover(
    function() {
      $aboutMeCaption.stop().animate({"top":firstRow});
    }, function() {
      $aboutMeCaption.stop().animate({"top":firstDefault});
    }
  );

  $ascvdRisk.hover(
    function() {
      $ascvdRiskCaption.stop().animate({"top":firstRow});
    }, function() {
      $ascvdRiskCaption.stop().animate({"top":firstDefault});
    }
  );

  $ascvdRisk.click(function(){
    $ascvdScreen.fadeIn();
    $backButton.fadeIn();
    $homeScreen.fadeOut();
  });

  $surveyFill.hover(
    function() {
      $surveyFillCaption.stop().animate({"top":firstRow});
    }, function() {
      $surveyFillCaption.stop().animate({"top":firstDefault});
    }
  );

  $surveyFill.click(function(){
    $surveyFillScreen.fadeIn();
    $backButton.fadeIn();
    $homeScreen.fadeOut();
  });

  $canaFeed.hover(
    function() {
      $canaFeedCaption.stop().animate({"top":firstRow});
    }, function() {
      $canaFeedCaption.stop().animate({"top":firstDefault});
    }
  );

  $canaFeed.click(function(){
    $canaFeedScreen.fadeIn();
    $backButton.fadeIn();
    $homeScreen.fadeOut();
  });

  $cubeUtilities.hover(
    function() {
      $cubeUtilitiesCaption.stop().animate({"top":secondRow});
    }, function() {
      $cubeUtilitiesCaption.stop().animate({"top":secondDefault});
    }
  );

  $stackOverflow.hover(
    function() {
      $stackOverflowCaption.stop().animate({"top":secondRow});
    }, function() {
      $stackOverflowCaption.stop().animate({"top":secondDefault});
    }
  );

  $github.hover(
    function() {
      $githubCaption.stop().animate({"top":secondRow});
    }, function() {
      $githubCaption.stop().animate({"top":secondDefault});
    }
  );

  $contactMe.hover(
    function() {
      $contactMeCaption.stop().animate({"top":secondRow});
    }, function() {
      $contactMeCaption.stop().animate({"top":secondDefault});
    }
  );

  $backButton.click(function(){
    $canaFeedScreen.fadeOut();
    $ascvdScreen.fadeOut();
    $surveyFillScreen.fadeOut();
    $backButton.fadeOut();
    $homeScreen.fadeIn();
  });
})();