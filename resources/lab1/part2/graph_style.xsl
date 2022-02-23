<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width"/>
                <title>Graphics example</title>
            </head>
            <body>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="root">
        <xsl:apply-templates/>
    </xsl:template>

    <xsl:template match="графика">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny">
            <xsl:attribute name="width">
                <xsl:value-of select="@ширина"/>
            </xsl:attribute>
            <xsl:attribute name="height">
                <xsl:value-of select="@высота"/>
            </xsl:attribute>
            <xsl:apply-templates/>
        </svg>
    </xsl:template>

    <xsl:template match="эллипс">
        <g>
            <xsl:attribute name="fill">
                <xsl:value-of select="@заливка"/>
            </xsl:attribute>
            <xsl:attribute name="stroke">
                <xsl:value-of select="@ободок"/>
            </xsl:attribute>
            <xsl:attribute name="stroke-width">
                <xsl:value-of select="@ширина-ободка"/>
            </xsl:attribute>
            <ellipse>
                <xsl:attribute name="cx">
                    <xsl:value-of select="@cx"/>
                </xsl:attribute>
                <xsl:attribute name="cy">
                    <xsl:value-of select="@cy"/>
                </xsl:attribute>
                <xsl:attribute name="rx">
                    <xsl:value-of select="@rx"/>
                </xsl:attribute>
                <xsl:attribute name="ry">
                    <xsl:value-of select="@ry"/>
                </xsl:attribute>
            </ellipse>
        </g>
    </xsl:template>
</xsl:stylesheet>