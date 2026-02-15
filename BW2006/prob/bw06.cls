\NeedsTeXFormat{LaTeX2e}[2001/06/01]
\ProvidesClass{bw06}[2006/11/05 Baltic Way 2006 problem paper class]

% Pass encoding options to inputenc
\DeclareOption{latin1}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{latin2}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{latin3}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{latin4}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{latin5}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{latin9}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{latin10}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{utf8}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{ascii}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{ansinew}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{applemac}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp437}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp437de}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp850}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp852}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp858}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp865}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp1250}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp1252}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
\DeclareOption{cp1257}{\PassOptionsToPackage{\CurrentOption}{inputenc}}
% Pass other options to article.cls
\DeclareOption*{\PassOptionsToClass{\CurrentOption}{article}}
% Default options:
\ExecuteOptions{latin1,12pt,a4paper,fleqn}
\ProcessOptions

\LoadClass{article}
\RequirePackage{fixltx2e}       % LaTeX bug fixes
\RequirePackage[margin=2cm]{geometry}
\RequirePackage[T1]{fontenc}    % TODO: make this an option (?)
\RequirePackage{inputenc}       % The latin1 option is default (above)
\RequirePackage{lmodern}        % T1-encoded Type-1 fonts
\RequirePackage{textcomp}       % Some more symbols

\RequirePackage{fancyhdr}       % Header/footer formatting
\RequirePackage{graphicx}       % for \includegraphics
%\RequirePackage{calc}
\RequirePackage[fleqn]{amsmath} % (Make fleqn an option?)
\RequirePackage{amssymb}
\RequirePackage{amsfonts}
\RequirePackage{tabularx}       % For our \maketitle

% Headers and footers
\pagestyle{fancy}
\setlength{\headheight}{15pt}
\renewcommand{\headrulewidth}{0pt}
\cfoot{---\quad\thepage\quad---}

% Paragraphs are separated by vertical space, not indentation of first line
\setlength{\parskip}{10pt plus 1pt minus 1pt}
\setlength{\parindent}{0pt}

% \begin{problems} \item ... \item ... ... \end{problems}
\newlength{\pr@bwd}
\settowidth{\pr@bwd}{\bfseries99. }
\newcounter{pr@b}
\newenvironment{problems}{%
  \list{\bfseries\thepr@b.}{%
    \usecounter{pr@b}%
    \setlength{\leftmargin}{\pr@bwd}%
    \setlength{\labelwidth}{\pr@bwd}%
    \setlength{\labelsep}{1ex}}}%
{\endlist}

% Our version of \maketitle
\newcommand{\versi@n}{???}
\newcommand{\version}[1]{%       e.g. \version{Finnish}
  \renewcommand{\versi@n}{#1}}
\newcommand{\b@lticway}{Baltic Way 2006}
\newcommand{\maintitle}[1]{%     e.g. \maintitle{Baltian tie 2006}
  \renewcommand{\b@lticway}{#1}}
\newcommand{\l@cation}{Turku, November 3, 2006}
\newcommand{\linetwo}[1]{%       e.g. \linetwo{Turku, 3.\ marraskuuta 2006}
  \renewcommand{\l@cation}{#1}}
\newcommand{\titlelin@}[1]{{\mbox{}\hfill #1\strut\hfill\mbox{}}}
\renewcommand{\maketitle}{%
  {\centering
  \begin{tabularx}{\textwidth}{Xp{70mm}X}
    \hspace*{25mm}\raisebox{-18pt}[0pt][0pt]{\includegraphics[height=42pt]{bw06logo}} &
    \begin{minipage}[c]{70mm}
      \centering
      {\sffamily\bfseries\large \b@lticway} \\[2pt] {\sffamily\bfseries \l@cation}
    \end{minipage}
    &
    \hfill Version: \versi@n
  \end{tabularx}}
  \bigskip}
